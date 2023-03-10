<?php

declare(strict_types=1);

namespace App\Utils;

use App\Entity\Log;
use Doctrine\DBAL\Exception;
use Doctrine\ORM\EntityManagerInterface;
use Monolog\Handler\AbstractProcessingHandler;

class MonologDBHandler extends AbstractProcessingHandler
{
    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $em;

    /**
     * MonologDBHandler constructor.
     * @param EntityManagerInterface $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        parent::__construct();
        $this->em = $em;
    }

    /**
     * @param array $record
     */
    protected function write(array $record): void
    {
        $logEntry = new Log();
        //dd($record['message']);
        $logEntry->setMessage($record['message']);
        $logEntry->setLevel($record['level']);
        $logEntry->setLevelName($record['level_name']);
        $logEntry->setExtra($record['extra']);
        $logEntry->setContext($record['context']);
        //$this->em->persist($logEntry);
        //$this->em->flush();
    }
}
