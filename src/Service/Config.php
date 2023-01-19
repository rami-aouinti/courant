<?php

declare(strict_types=1);

namespace App\Service;

use App\Repository\MenuRepository;

class Config
{

    private MenuRepository $repository;

    /**
     * @param MenuRepository $repository
     */
    public function __construct(MenuRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return \App\Entity\Menu[]
     */
    public function collection(): array
    {
        return [
            'menus' => $this->repository->findBy([
                'active' => true
            ])
        ];
    }
}
