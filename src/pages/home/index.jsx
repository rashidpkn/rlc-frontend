


import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';

import MobileScreen1 from './components/MobileScreen1';




function Home() {


  return (
    <div className="home w-full overflow-y-hidden">
      <div className="hidden lg:block">
        <Screen1 />
      </div>
      <div className="block lg:hidden">
        <MobileScreen1 />
      </div>
      <Screen2 />
      <Screen3 />
      <Screen4 />

    </div>
  );
}

export default Home;




