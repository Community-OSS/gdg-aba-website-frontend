import Layout from '@/components/Layout';
import { DefaultCard } from '@/components/Cards';

export default function Test() {
  return (
    <Layout title={`Test`}>
      <section>
        <h1>Testing cards</h1>

        <div className="grid md:flex gap-10">
          <DefaultCard
            type={`projects`}
            title={`Community Project One`}
            date={`October 2021`}
          />

          <DefaultCard
            type={`events`}
            title={`Speaker/Session Talk`}
            date={`October 2021`}
          />
        </div>
      </section>
    </Layout>
  );
}
