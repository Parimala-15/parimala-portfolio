// Unverified numbers are labelled "Self-reported result" on the site.
export default function Result({ result }) {
  if (!result) return null;
  return (
    <p className="result">
      <strong>{result.verified ? 'Result.' : 'Self-reported result.'}</strong> {result.text}
    </p>
  );
}
