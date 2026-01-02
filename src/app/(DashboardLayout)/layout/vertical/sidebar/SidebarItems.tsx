import Menuitems from './MenuItems';
import { useAuth } from '@/app/context/AuthContext';
import { usePathname } from "next/navigation";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CustomizerContext } from '@/app/context/customizerContext';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import NavGroup from './NavGroup/NavGroup';
import { useContext } from 'react';




const SidebarItems = () => {
  const pathname = usePathname();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const { isSidebarHover, isCollapse, isMobileSidebar, setIsMobileSidebar } = useContext(CustomizerContext);

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp ? isCollapse == "mini-sidebar" && !isSidebarHover : '';

  const { role, loading } = useAuth();

  const filterByRole = (items: any[]) => {
    if (!items) return items;
    return items
      .map((it) => {
        if (it.roles && it.roles.length > 0) {
          if (!role) return null;
          if (!it.roles.includes(role)) return null;
        }
        const newIt = { ...it };
        if (newIt.children) newIt.children = filterByRole(newIt.children);
        return newIt;
      })
      .filter(Boolean);
  };

  const visibleMenu = loading ? Menuitems : filterByRole(Menuitems as any[]);

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {visibleMenu.map((item: any) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else if (item.children) {
            return (
              <NavCollapse
                menu={item}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                pathWithoutLastPart={pathWithoutLastPart}
                level={1}
                key={item.id}
                onClick={() => setIsMobileSidebar(!isMobileSidebar)}
              />
            );

            // {/********If Sub No Menu**********/}
          } else {
            return (
              <NavItem item={item} key={item.id} pathDirect={pathDirect} hideMenu={hideMenu} onClick={() => setIsMobileSidebar(!isMobileSidebar)} />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
