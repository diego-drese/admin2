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
<li class="sidebar-item">
    <a id="menu-{{$id}}" aria-expanded="false" class="sidebar-link {{$children ? 'nav-parent has-arrow': ''}} {{$controllerLink == $controllerReceive ? 'active activeMenu': ''}}" href="{{$route}}">
        <i class="fa {{$icon}}"></i>
        <span class="hide-menu">{{$menu}}</span>
    </a>

    <?php
    if($children){
        echo "<ul aria-expanded=\"false\" class=\"collapse  first-level\" >";
        foreach ($children as $child) {
            create_menu($child, $idCurrent, $ctrl);
        }
        echo "</ul>";
    }
    ?>
</li>
<?php
    }
echo '<ul id="sidebarnav" class=" sidebarnav nav nav-pills flex-column" >';
    foreach ($ironForgeResourcesMenu as $key=>$item) {
            create_menu($item, $idCurrent, $ctrl);
    }
echo "</ul>";



