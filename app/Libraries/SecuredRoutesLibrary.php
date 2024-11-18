<?php

namespace App\Libraries;

class SecuredRoutesLibrary
{
    const SECURED_ROUTES = [
        'sysa' => [
            '/user-manual',
            '/user/session',
            '/user/get-all',
            '/user/create',
            '/user/update/',
            '/front/change-password',

            '/front/sysa/home',
            '/front/sysa/mgt/acc-mgt',
            '/front/sysa/mgt/setup/office',
            '/front/sysa/mgt/setup/uacs',
            '/front/sysa/mgt/setup/tax',
            '/front/sysa/mgt/user-logs',
            '/front/sysa/misc/help-desk',

            '/front/sysa/notifications',
            '/front/sysa/change-pass',

            '/auth/change-password',
            '/notif/get-list',
            '/notif/update/',
            '/notif/mass/update',

            '/region/get-list',
            '/region/create',
            '/region/update/',

            '/uacs/get-list',
            '/uacs/create',
            '/uacs/update/',

            '/tax-code/get-list',
            '/tax-code/create',
            '/tax-code/update/',

            '/tax-class/get-list',
            '/tax-class/create',
            '/tax-class/update/',

            '/user-logs/get-list',
        ],
    ];
}