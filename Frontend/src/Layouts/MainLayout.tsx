import { Outlet } from 'react-router-dom';


export const MainLayout = () => {
  return (
    <>
     
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
};