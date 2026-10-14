import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { MENU } from './menu';
import { MenuItem } from './menu.model';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../core/services/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: false
})
export class SidebarComponent implements OnInit {
  id1Index: number = 201;
  id2Index: number = 301;
  id3Index: number = 401;
  idSubIndex: number = 501;

  menu: any;
  toggle: any = true;
  menuItems: MenuItem[] = [];
  @ViewChild('sideMenu') sideMenu!: ElementRef;
  @Output() mobileMenuButtonClicked = new EventEmitter();

  constructor(private router: Router, public translate: TranslateService, private authenticationService: AuthenticationService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // Menu Items
    this.menuItems = MENU;
    this.router.events.subscribe((event) => {
      if (document.documentElement.getAttribute('data-layout') != "twocolumn") {
        if (event instanceof NavigationEnd) {
          this.initActiveMenu();
        }
      }
    });
  }

  /***
   * Activate droup down set
   */
  ngAfterViewInit() {
    setTimeout(() => {
          let siteHeaderNavigations = this.authenticationService.getSiteHeaderNavigations();
      var userRoleTransactions = this.authenticationService.getUserRoleTransactions();

      if (userRoleTransactions != null) {
        this.menuItems = [];
        
        let menuSubItem: MenuItem = {
          id: 200,
          label: 'Veejan App',
          //label: 'MENUITEMS.COMPONENTS.TEXT',
          isTitle: true,
          isVisible: true
        };

        let headerItem = this.menuItems.find((ob: any) => ob.label === 'Veejan App');
        if (headerItem === undefined) {
          this.menuItems.push(menuSubItem);
        }

        // Menu : First Level menu items
        this.addFirstLevelHeaders(menuSubItem, siteHeaderNavigations, userRoleTransactions);
      }

      this.initActiveMenu();
    }, 0);
  }

    addFirstLevelHeaders(menuSubItem: any, siteHeaderNavigations: any, userRoleTransactions: any) {
    let headerDataL1 = siteHeaderNavigations.filter((s: any) => s.Description == null);
    headerDataL1.forEach((headerDataItemL1: any) => {

      let subItem1 = this.menuItems.find((ob: any) => ob.label === headerDataItemL1.Name);
      if (subItem1 === undefined) {

        let headerItem1: MenuItem = {
          id: this.id1Index,
          label: headerDataItemL1.Name,
          //label: 'MENUITEMS.DASHBOARD.TEXT',
          icon: 'las la-tachometer-alt',
          isCollapsed: true,
          isVisible: true,
          parentId: menuSubItem.id,
          subItems: []
        };

        let headerDataL2P = siteHeaderNavigations.filter((s: any) => s.Description == headerDataItemL1.Id);
        let headerDataL2S = userRoleTransactions.filter((s: any) => s.HeaderName == headerDataItemL1.Name);
        if (headerDataL2P.length > 0 || headerDataL2S.length > 0) {
          this.menuItems.push(headerItem1);
          this.id1Index = this.id1Index + 1;
          this.addSecondLevelHeaders(headerItem1, headerDataItemL1, siteHeaderNavigations, userRoleTransactions)
          this.addMenuItemsInHeader(headerItem1, headerDataItemL1, userRoleTransactions);
        }
      }
    });
  }

  addSecondLevelHeaders(headerItem1: any, headerDataItemL1: any, siteHeaderNavigations: any, userRoleTransactions: any) {
    let headerDataL2 = siteHeaderNavigations.filter((s: any) => s.Description == headerDataItemL1.Id);
    headerDataL2.forEach((headerDataItemL2: any) => {

      let subItem2 = this.menuItems.find((ob: any) => ob.label === headerDataItemL2.Name);
      if (subItem2 === undefined) {

        let headerItem2: MenuItem = {
          id: this.id2Index,
          label: headerDataItemL2.Name,
          icon: 'las la-tachometer-alt',
          isCollapsed: true,
          isVisible: true,
          parentId: headerItem1.id,
          subItems: []
        };

        let headerDataL3 = siteHeaderNavigations.filter((s: any) => s.Description == headerDataItemL2.Id);
        if (headerDataL3.length > 0) {
          headerItem1.subItems.push(headerItem2);
          this.id2Index = this.id2Index + 1;
          this.addThirdLevelHeaders(headerItem2, headerDataItemL2, siteHeaderNavigations, userRoleTransactions)
          this.addMenuItemsInHeader(headerItem2, headerDataItemL2, userRoleTransactions);
        }
      }
    });
  }

  addThirdLevelHeaders(headerItem2: any, headerDataItemL2: any, siteHeaderNavigations: any, userRoleTransactions: any) {
    let headerDataL3 = siteHeaderNavigations.filter((s: any) => s.Description == headerDataItemL2.Id);
    headerDataL3.forEach((headerDataItemL3: any) => {

      let subItem3 = this.menuItems.find((ob: any) => ob.label === headerDataItemL3.Name);
      if (subItem3 === undefined) {

        let headerItem3: MenuItem = {
          id: this.id3Index,
          label: headerDataItemL3.Name,
          icon: 'las la-tachometer-alt',
          isCollapsed: true,
          isVisible: true,
          parentId: headerItem2.id,
          subItems: []
        };

        let transactions = userRoleTransactions.filter((sh: any) => sh.HeaderId == headerDataItemL3.Id || sh.ParentHeaderId == headerDataItemL3.Id);
        if (transactions.length > 0) {
          headerItem2.subItems.push(headerItem3);
          this.id3Index = this.id3Index + 1;

          this.addMenuItemsInHeader(headerItem3, headerDataItemL3, userRoleTransactions);
        }
      }
    });
  }

  addMenuItemsInHeader(headerItem: any, headerDataItem: any, userRoleTransactions: any) {
    let transactions = userRoleTransactions.filter((sh: any) => sh.HeaderId == headerDataItem.Id || sh.ParentHeaderId == headerDataItem.Id);
    transactions.forEach((tranItem: any) => {

      if (tranItem.IsActive == true) {
        let subItem = this.menuItems.find((ob: any) => ob.link === tranItem.RouteUrl);
        if (subItem === undefined) {

          let subHeaderItem: MenuItem = {
            id: this.idSubIndex,
            label: tranItem.PageTitle,
            link: tranItem.RouteUrl,
            icon: 'las la-tachometer-alt',
            isCollapsed: true,
            isVisible: true,
            parentId: headerItem.id,
            subItems: []
          };

          headerItem.subItems.push(subHeaderItem);
          this.idSubIndex = this.idSubIndex + 1;
        }
      }
    });
  }

  removeActivation(items: any) {
    items.forEach((item: any) => {
      item.classList.remove("active");
    });
  }

  toggleItem(item: any) {
    this.menuItems.forEach((menuItem: any) => {

      if (menuItem == item) {
        menuItem.isCollapsed = !menuItem.isCollapsed
      } else {
        menuItem.isCollapsed = true
      }
      if (menuItem.subItems) {
        menuItem.subItems.forEach((subItem: any) => {

          if (subItem == item) {
            menuItem.isCollapsed = !menuItem.isCollapsed
            subItem.isCollapsed = !subItem.isCollapsed
          } else {
            subItem.isCollapsed = true
          }
          if (subItem.subItems) {
            subItem.subItems.forEach((childitem: any) => {

              if (childitem == item) {
                childitem.isCollapsed = !childitem.isCollapsed
                subItem.isCollapsed = !subItem.isCollapsed
                menuItem.isCollapsed = !menuItem.isCollapsed
              } else {
                childitem.isCollapsed = true
              }
              if (childitem.subItems) {
                childitem.subItems.forEach((childrenitem: any) => {

                  if (childrenitem == item) {
                    childrenitem.isCollapsed = false
                    childitem.isCollapsed = false
                    subItem.isCollapsed = false
                    menuItem.isCollapsed = false
                  } else {
                    childrenitem.isCollapsed = true
                  }
                })
              }
            })
          }
        })
      }
    });
  }

  activateParentDropdown(item: any) {
    item.classList.add("active");
    let parentCollapseDiv = item.closest(".collapse.menu-dropdown");

    if (parentCollapseDiv) {
      parentCollapseDiv.parentElement.children[0].classList.add("active");
      if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
        if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
          parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
        if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse")) {
          parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse").previousElementSibling.classList.add("active");
        }
      }
      return false;
    }
    return false;
  }

  updateActive(event: any) {
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link"));
      this.removeActivation(items);
    }
    this.activateParentDropdown(event.target);
  }

  initActiveMenu() {
    let pathName = window.location.pathname;
    // Check if the application is running in production
    if (environment.prod) {
      // Modify pathName for production build
      pathName = pathName.replace('/velzon/angular/minimal', '');
    }

    const active = this.findMenuItem(pathName, this.menuItems)
    this.toggleItem(active)
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link"));
      let activeItems = items.filter((x: any) => x.classList.contains("active"));
      this.removeActivation(activeItems);

      let matchingMenuItem = items.find((x: any) => {
        if (environment.prod) {
          let path = x.pathname
          path = path.replace('/velzon/angular/minimal', '');
          return path === pathName;
        } else {
          return x.pathname === pathName;
        }

      });
      if (matchingMenuItem) {
        this.activateParentDropdown(matchingMenuItem);
      }
    }
  }

  private findMenuItem(pathname: string, menuItems: any[]): any {
    for (const menuItem of menuItems) {
      if (menuItem.link && menuItem.link === pathname) {
        return menuItem;
      }

      if (menuItem.subItems) {
        const foundItem = this.findMenuItem(pathname, menuItem.subItems);
        if (foundItem) {
          return foundItem;
        }
      }
    }

    return null;
  }
  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    var sidebarsize = document.documentElement.getAttribute("data-sidebar-size");
    if (sidebarsize == 'sm-hover-active') {
      document.documentElement.setAttribute("data-sidebar-size", 'sm-hover');

    } else {
      document.documentElement.setAttribute("data-sidebar-size", 'sm-hover-active')
    }
  }

  /**
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    document.body.classList.remove('vertical-sidebar-enable');
  }
}
