import useSwr from "swr";
import Link from "next/link";
import axios from "axios";
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function CallAPi({ id }) {
  const { data, error } = useSwr(`/api/${id}`, fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href="/user/[id]" as={`/user/${user.id}`} legacyBehavior>
            {`User ${user.id}`}
          </Link>
        </li>
      ))}
    </ul>
  );
}
