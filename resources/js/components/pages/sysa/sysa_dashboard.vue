<template>
    <div id="main">
        <C_Layout_Header></C_Layout_Header>
        <C_Layout_SYSA_Sidebar></C_Layout_SYSA_Sidebar>
        <!-- Start: Content-Wrapper -->
        <section id="content_wrapper">
            <!-- Start: Topbar -->
            <header id="topbar" class="alt">
                <div class="topbar-left">
                    <ol class="breadcrumb">
                        <li class="crumb-active" style="margin-top: 7px;">
                            <a href="dashboard.html">Dashboard</a>
                        </li>
                    </ol>
                </div>
            </header>
            <!-- End: Topbar -->
            <C_WebDevImprovement></C_WebDevImprovement>
            
            <!-- TEMPORARY PENDING FOR DEVELOPMENT (ON-HOLD) -->
            <div class="panel" style="display: none;">
                <!-- <div class="panel-heading">
                    <span class="panel-title">Summary of Entries for Special</span>
                </div> -->
                <div class="panel-body">
                    <!-- START: PANEL SECTION FOR ORS COUNT -->
                    <div class="panel panel-colorbox-open panel-primary" id="spy2" style="margin: 1%">
                        <br>
                        <div class="panel-heading ">
                            <div class="panel-title hidden-xs">
                                <span class="fa fa-list"></span>ORS Processing Status Count Overview Per Month of: 
                            </div>
                        </div>
                        <div class="panel-body pn">
                            <div style="margin-top: 1%;">
                                <div class="col-sm-2 col-xl-2">
                                    <div class="panel panel-tile text-center br-a br-grey">
                                        <div class="panel-body">
                                            <h1 class="fs30 mt5 mbn">{{  }}
                                            </h1>
                                            <h5 class="text-system">Pending ORS as of<br> </h5>
                                        </div>
                                        <a href=" ">
                                            <div class="panel-footer br-t p12">
                                                <span data-href=" " class="fs11">
                                                    <i class="fa fa-arrow-right pr5"></i> Click here to view more
                                                    details
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END: PANEL SECTION FOR ORS COUNT -->

                    <!-- START: CHART FOR ORS COUNT  -->
                    <div class="panel panel-colorbox-open panel-primary" id="spy2" style="margin: 1%">
                        <br>
                        <div class="panel-heading" style="background-color: #21416c;">
                            <div class="panel-title hidden-xs">
                                <span class="fa fa-bar-chart"></span>Total Count of ORS Created for Year 
                                (Only Filtered by Year)
                                <button id="btnBackOCCC" type="button" class="btn btn-md btn-warning pull-right"
                                    style="margin-top: 5px; display: none;">
                                    <i class="fa fa-arrow-left"></i>
                                    Back
                                </button>
                            </div>
                        </div>
                        <div class="panel-body pn">
                            <div>
                                <div id="OrsCountChartContainer"
                                    style="height: 370px; width: 98%; margin: 1%; margin-top: 2%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END: CHART FOR ORS COUNT -->
                </div>
            </div>
        </section>
        <!-- End: Content-Wrapper -->
    </div>
</template>
<script>
export default {
    mixins: [
    ],
    data () {
        return {

        }
    },  
    mounted () {

    },
    methods: {

    }
}
</script>
<style></style>