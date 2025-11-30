
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { content } from '@/content';
import Image from 'next/image';

const Branding = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6 text-center">
        <FontAwesomeIcon icon={faPalette} className="text-teal mb-4" size="3x" />
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          {content.branding.title}
        </h2>
        <p className="text-lg text-warm-gray-800 max-w-2xl mx-auto mt-4 mb-8">
          {content.branding.subtitle}
        </p>
        <div className="max-w-4xl mx-auto bg-warm-gray-900 border-2 border-warm-gray-800 rounded-xl p-8 flex flex-row md:flex-col gap-8 items-start">
            {/* Coluna do Tema Padrão */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
                <h3 className="font-bold text-white text-lg">{content.branding.defaultTheme.title}</h3>
                {/* Container da imagem com altura maior e posição relativa */}
                <div className="relative mt-4 w-full h-[450px] rounded-lg overflow-hidden">
                    <Image
                        src={content.branding.defaultTheme.imageSrc}
                        alt={content.branding.defaultTheme.imageAlt}
                        fill
                        className="object-contain" // 'object-contain' é melhor para screenshots
                    />
                </div>
            </div>
            {/* Coluna do Tema Customizado */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
                <h3 className="font-bold text-teal text-lg">{content.branding.customTheme.title}</h3>
                {/* Container da imagem com altura maior e posição relativa */}
                <div className="relative mt-4 w-full h-[450px] rounded-lg overflow-hidden">
                    <Image
                        src={content.branding.customTheme.imageSrc}
                        alt={content.branding.customTheme.imageAlt}
                        fill
                        className="object-contain" // 'object-contain' para não cortar a UI
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
