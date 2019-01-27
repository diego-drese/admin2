<?php
    $idCurrent  = null;
    $ctrl       = $ironForgeController;

    function create_menu($item, &$idCurrent, &$ctrl) {
        $controllerReceive  = $ctrl;
        $routeName          = $item['route_name'] ? $item['route_name'] : '#';
        $route              = $routeName != '#' ? route($routeName) : $routeName;
        $controllerLink     = $item['controller'];
        $menu               = $item['menu'];
        $icon               = $item['icon'];
        $id                 = $item['id'];
        $children           = null;
        if(count($item['sub'])) {
            $children = $item['sub'];
        }
        ?>
        <li class="treeview nav-item">
            <a id="menu-{{$id}}" class="nav-link {{$children ? 'nav-parent': ''}} {{$controllerLink == $controllerReceive ? 'active activeMenu': ''}}" href="{{$route}}">
                <i class="fa {{$icon}}"></i>
                {{$menu}}
            </a>

            <?php
            if($children){
                echo "<ul class=\"nav nav-pills flex-column \" style=\"display:none\">";
                    foreach ($children as $child) {
                        create_menu($child, $idCurrent, $ctrl);
                    }
                echo "</ul>";
            }
            ?>
        </li>
        <?php
    }

    foreach ($ironForgeResourcesMenu as $item) {
        echo "<ul class=\"nav nav-pills flex-column\" >";
            create_menu($item, $idCurrent, $ctrl);
        echo "</ul>";
    }







