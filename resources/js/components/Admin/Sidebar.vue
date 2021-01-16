<template>
    <div class="parentx-static col-2 px-0">

        <vs-sidebar
                hidden-background
                static-position
                :reduce="reduce"
                parent=".parentx-static"
                default-index="1"
                color="success"
                class="sidebarx"
                spacer
                v-model="active">

            <div class="header-sidebar" slot="header">
                <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
            </div>
            <vs-sidebar-group open title="Таблицы">
                <ul class="list-unstyled">
                    <li class="">
                        <router-link : class="text-muted">
                            <i class="fas fa-table"></i> Users</router-link>
                    </li>
                </ul>
            </vs-sidebar-group>
        </vs-sidebar>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data:()=>({
            active:true,
            reduce: false,
        }),
    }
</script>

<style>
    .header-sidebar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
    .header-sidebar h4 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .header-sidebar h4 > button {
        margin-left: 10px;
    }
    .footer-sidebar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .footer-sidebar > button {
        border: 0 solid rgba(0,0,0,0) !important;
        border-left: 1px solid rgba(0,0,0,0.07) !important;
        border-radius: 0 !important;
    }
    a:hover{
        text-decoration: none;
    }
    .router-link-active {
        color: #38c172;
    }
</style>
