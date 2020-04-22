import Avatar from './Avatar';

function Comment(props) {
  const { data } = props;

  if (!data) {
    return null;
  }

  return (
    <div className="flex space-x-4">
      <Avatar />
      <div className="flex-1">
        <div className="bg-white shadow-sm px-4 py-3 rounded-md mb-6">
          <h6 className="font-bold text-sm mb-2">{data.name}</h6>
          <p className="text-sm">
            {data.comment}
          </p>
        </div>
        {
          (data.replies || []).map(comment => (
            <Comment key={comment.id} data={comment} />
          ))
        }
      </div>
    </div>
  );
}

export default Comment;
