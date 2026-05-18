export default function Comments({ reviews }) {
  return (
    <>
      <h3>Comments</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p key={review._id}>
              {review.rating}/5: {review.text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
