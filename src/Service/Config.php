<?php

declare(strict_types=1);

namespace App\Service;

use App\Repository\ConfigRepository;
use App\Repository\MenuRepository;
use Symfony\Component\Security\Core\Security;

class Config
{
    private MenuRepository $menuRepository;
    private ConfigRepository $configRepository;
    private $security;

    /**
     * @param MenuRepository $menuRepository
     */
    public function __construct(MenuRepository $menuRepository, ConfigRepository $configRepository, Security $security)
    {
        $this->menuRepository = $menuRepository;
        $this->configRepository = $configRepository;
        $this->security = $security;
    }

    /**
     * @return \App\Entity\Menu[]
     */
    public function collection(): array
    {
        return [
            'menus' => $this->menuRepository->findBy([
                'active' => true
            ]),
            'config' => $this->configRepository->findOneBy([
                'user' => $this->security->getUser()
            ])
        ];
    }
}
