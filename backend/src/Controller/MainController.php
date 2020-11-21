<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MainController
 * @package App\Controller
 */
class MainController extends AbstractController
{
    /**
     * @Route("/", name="app.index")
     */
    public function index(): JsonResponse
    {
        return $this->json(['hello'], 200);
    }
}
