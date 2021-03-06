<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ListController
 * @package App\Controller\Api
 * @Route("/api", name="api.")
 */
class ListController extends AbstractController
{
    /**
     * @Route("/list", name="list", methods={"GET","POST"})
     */
    public function getList(): JsonResponse
    {
        $list = [
            [
                "title" => "Суп",
                "text" => "Сразу",
            ],
            [
                "title" => "Картошку",
                "text" => "После",
            ]
        ];

        return $this->json($list, 200);
    }
}
