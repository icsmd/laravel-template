<template>
    <!-- Start: Sidebar -->
    <aside id="sidebar_left" class="nano nano-light affix custom_aside_bg_color">
        <!-- Start: Sidebar Left Content -->
        <div class="sidebar-left-content nano-content">
            <!-- Start: Sidebar Header -->
            <header class="sidebar-header">
                <!-- Sidebar Widget - Author -->
                <div class="sidebar-widget author-widget">
                    <div class="media">
                        <!-- IMG of USER (FOR REPLACEMENT)-->
                        <a class="media-left">
                            <img src="../../../../img/user-profile.jpg" class="img-responsive">
                        </a>
                        <div class="media-body">
                            <div class="media-author">{{ $root.aUserInfo.firstname }} {{ $root.aUserInfo.lastname }}</div>
                            <div class="media-links">
                                <a class="sidebar-menu">System Admin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- End: Sidebar Header -->

            <!-- Start: Sidebar Menu -->
            <ul class="nav sidebar-menu">
                <li class="sidebar-label pt20">Menu</li>
                <li>
                    <a href="../README/index.html">
                        <span class="fa fa-book"></span>
                        <span class="sidebar-title">User Manual</span>
                    </a>
                </li>
                <li class="active" data-comp="sidebar" :data-href="sHrefHome">
                    <a href="/front/sdor/home" data-comp="sidebar" :data-href="sHrefHome">
                        <span class="glyphicon glyphicon-home" data-comp="sidebar" :data-href="sHrefHome"></span>
                        <span class="sidebar-title" data-comp="sidebar" :data-href="sHrefHome">Dashboard</span>
                    </a>
                </li>
                <li class="sidebar-label pt15">System Management</li>
                 <!-- MANAGE SHEETS -->
                 <li data-comp="sidebar" :data-href="sHrefMgtAcc">
                    <a href="/front/sdor/home" data-comp="sidebar" :data-href="sHrefMgtAcc">
                        <span class="fa fa-users" data-comp="sidebar" :data-href="sHrefMgtAcc"></span>
                        <span class="sidebar-title" data-comp="sidebar" :data-href="sHrefMgtAcc">Accounts Management</span>
                    </a>
                </li>
                <li>
                    <a class="accordion-toggle" href="#">
                        <span class="fa fa-cogs"></span>
                        <span class="sidebar-title">System Setup</span>
                        <span class="caret"></span>
                    </a>
                    <ul class="nav sub-nav custom_aside_sub_li">
                        <li class="custom_aside_sub_li" data-comp="sidebar" :data-href="sHrefMgtSetupOffice">
                            <a href="widgets_tile.html" data-comp="sidebar" :data-href="sHrefMgtSetupOffice">
                                <span class="fa fa-cogs" data-comp="sidebar" :data-href="sHrefMgtSetupOffice"></span>
                                Office/Region</a>
                        </li> 
                      
                    </ul>
                </li>
                <li data-comp="sidebar" :data-href="sHrefMgtUserLog">
                    <a href="/front/sdor/home" data-comp="sidebar" :data-href="sHrefMgtUserLog">
                        <span class="fa fa-list-alt" data-comp="sidebar" :data-href="sHrefMgtUserLog"></span>
                        <span class="sidebar-title" data-comp="sidebar" :data-href="sHrefMgtUserLog">System Logs</span>
                    </a>
                </li>
               
                <!-- START: HIDDEN ELEMENTS -->
              
               
                <!-- OTHER REPORTS -->
                <li class="hidden">
                    <a class="accordion-toggle" href="#">
                        <span class="fa fa-bar-chart"></span>
                        <span class="sidebar-title">Other Reports</span>
                        <span class="caret"></span>
                    </a>
                    <ul class="nav sub-nav custom_aside_sub_li">
                        <li class="custom_aside_sub_li" data-comp="sidebar" :data-href="sHrefOrsReport">
                            <a href="widgets_tile.html" data-comp="sidebar" :data-href="sHrefOrsReport">
                                <span class="fa fa-bar-chart" data-comp="sidebar" :data-href="sHrefOrsReport"></span>
                                ORS Record List</a>
                        </li>
                    </ul>
                </li>
                 <!-- END: HIDDEN ELEMENTS -->
            </ul>
            <!-- End: Sidebar Menu -->
        </div>
        <!-- End: Sidebar Left Content -->

    </aside>
    <!-- End: Sidebar Left -->
</template>
<script>
import HttpRequest from '../../../libraries/request.js'
export default {
    mixins: [
        HttpRequest
    ],
    data() {
        return {
            sHrefHome: '/front/sysa/home',
            sHrefMgtAcc: '/front/sysa/mgt/acc-mgt',
            sHrefMgtSetupOffice: '/front/sysa/mgt/setup/office',
            sHrefMgtUserLog: '/front/sysa/mgt/user-logs',
        }
    },
    mounted() { 
        this.initSidebarNav();
    },
    methods: {
        initSidebarNav: function () {
            // Event listener for page redirect
            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.dataset.comp === 'sidebar') {
                    window.location.href = event.target.dataset.href;
                }
            }, false);
        }
    }
}
</script>
<style scoped>
.custom_aside_bg_color {
    background-color: #2a2453 !important;
}

.sidebar-label {
    color: #54cfd8 !important;
}

.custom_aside_sub_li {
    background-color: #3c375f !important;
}

.hidden {
    display: none;
}
</style>