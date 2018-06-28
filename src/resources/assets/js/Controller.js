class ControllerPB {

    constructor(){

        //Call Methods
        this.buildMenu();
        this.aggLoaderPB(status);
        this.toggleMenu();
    }

    buildMenu(){
        let activeMenuId = $('.activeMenu').prop('id');
        let count = 0;
        if(activeMenuId){
            while($('#'+activeMenuId).parents('.treeview').length){
                let parent = $('#'+activeMenuId).parents('.treeview');
                parent.find('ul:first').css('display','block').parent().addClass('active');
                activeMenuId = parent.prop('id');
                count++;
                console.log(count);
                if(count>50){
                    break;
                }
            }
        }
    }

    aggLoaderPB(status) {
            let loaderAgg = $('#aggloader');
            if (status) {
                loaderAgg.css('opacity', '1');
                loaderAgg.css('transition', '1ms')
            } else {
                loaderAgg.css('opacity', '0');
                loaderAgg.css('transition', '1s')
            }
    }

    toggleMenu(){
        let menuIsopened = localStorage.getItem('menu');
        if(menuIsopened == 'off'){
            document.querySelector('body').classList.add('sidebar-collapse')
        }
        $('body').on('click', '.sidebar-toggle', function () {
            let menuIsOpen = window.localStorage.getItem('menu');
            if (menuIsOpen == null) {
                localStorage.setItem('menu', 'off');
            }
            if (menuIsOpen == 'off') {
                window.localStorage.setItem('menu', 'on');
            }
            else {
                window.localStorage.setItem('menu', 'off')
            }
        });
    }
}