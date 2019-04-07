<?php
$idCurrent  = null;
$ctrl       = $adminController;

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
<li id="li-{{$id}}" class="sidebar-item {{$controllerLink == $controllerReceive ? ' activeMenu': ''}}">
    <a id="a-{{$id}}" aria-expanded="false" class="sidebar-link {{$children ? 'nav-parent has-arrow': ''}} {{$controllerLink == $controllerReceive ? ' active ': ''}}" href="{{$route}}">
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
    foreach ($adminResourcesMenu as $key=>$item) {
            create_menu($item, $idCurrent, $ctrl);
    }
echo "</ul>";



