
import { FC } from 'react';

import { Layout } from '../components/layouts';
// import { TasksContainerDesktop } from '../components/organisms';
import { NewEntry, Search } from '../components/atoms';
import { CustomModal } from '../components/molecules';
import { DetailedCardSection } from '../components/organisms/DetailedCardSection';

const Home: FC = () => {

  return (
    <Layout title='Home - OpenJira'>
      {/* <TasksContainerDesktop /> */}
      <Search fullWidth className="index__search"/>

      <DetailedCardSection title='En Progreso'/>

      <NewEntry />
      <CustomModal />
    </Layout>
  );
};

export default Home;
