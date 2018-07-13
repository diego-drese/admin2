<?php
    $idCurrent = null;
    $ctrl = $ironForgeController;
    function create_menu($item, &$idCurrent, &$ctrl) {
    $controllerReceive = $ctrl;
    $routeName = $item['route_name'] ? $item['route_name'] : '#';
    $route = $routeName != '#' ? route($routeName) : $routeName;
    $controllerLink = $item['controller'];
    $menu = $item['menu'];
    $icon = $item['icon'];
    $id = $item['id'];

    if(count($item['sub'])) {
    $children = $item['sub'];
    ?>
    <li id="menu-{{$id}}"
        class="treeview menu-{{$id}} menuTreeview {{$controllerLink == $controllerReceive ? 'active': ''}}">
        <a href="{{$route}}">
            <i class="fa {{$icon}}"></i>
            <span>{{$menu}}</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-down pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu menuTreeview ">
            <?php
            foreach ($children as $child) {
                create_menu($child, $idCurrent, $ctrl);
            }
            ?>
        </ul>
    </li>
    <?php
      } else {
    ?>
    <li id="menu-{{$id}}" class="menu-{{$id}} menuTreeview  {{$controllerLink == $controllerReceive ? 'active activeMenu': ''}}">
        <a href="{{$route}}">
            <i class="fa {{$icon}}"></i> <span>{{$menu}}</span>
        </a>
    </li>
    <?php
        }
    }
    ?>

<aside class="main-sidebar">
    <section class="sidebar">
        <ul class="sidebar-menu">
            <?php
                foreach ($ironForgeResourcesMenu as $item) {
                    create_menu($item, $idCurrent, $ctrl);
                }
            ?>
        </ul>
    </section>
</aside>