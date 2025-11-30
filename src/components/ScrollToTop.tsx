'use client';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';




const ScrollToTop = () => {
    // Estado para controlar a visibilidade do botão
    const [isVisible, setIsVisible] = useState(false);

    // Função para verificar a posição de rolagem
    const toggleVisibility = () => {
        // Se o usuário rolou mais de 300px para baixo, mostra o botão
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Função para rolar a página para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adiciona uma animação suave
        });
    };

    // Adiciona e remove o "ouvinte" do evento de scroll
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Limpa o ouvinte quando o componente é desmontado para evitar vazamento de memória
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isVisible && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="bg-teal text-white w-12 h-12 rounded-full flex items-center justify-center
                                         hover:bg-teal/90 transition-opacity opacity-80 hover:opacity-100"
                    aria-label="Scroll to top"
                >
                    <FontAwesomeIcon icon={faArrowUp} size="lg" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
