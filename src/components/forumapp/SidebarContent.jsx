import React from 'react';
import SidebarForum from '../../layouts/SidebarForum';
import CardUser from './CardUser';
import RecentEvents from './RecentEvent';



function SidebarContent({ user, events }) {
  return (
    <SidebarForum>
      <CardUser
        {...user}
      />
      <RecentEvents events={events} />
    </SidebarForum>
  );
}

export default SidebarContent;
