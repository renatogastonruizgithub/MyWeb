import Layout from "../../components/layout/layout";
import { useRouter } from 'next/router'
export default function Projects() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Layout>
        <h1>Projects</h1>
        {id}
      </Layout>
    </>
  );
}
