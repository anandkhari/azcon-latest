import Image from 'next/image';

export const ImageLeftContentRight = ({ service }) => {
    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl group">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0A192F]/20 group-hover:bg-[#26C6DA]/10 transition-colors duration-500" />
            </div>
            <div>
                <h2 className="text-3xl font-black text-[#0A192F] mb-6 uppercase tracking-tight">
                    Comprehensive <span className="text-[#26C6DA]">Overview</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                </p>
                <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#26C6DA] rounded-full" />
                            <span className="text-[#0A192F] font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const ImageGrid = ({ service }) => {
    const images = service.images || [service.image];
    return (
        <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-black text-[#0A192F] mb-6 uppercase tracking-tight">
                    Visual <span className="text-[#26C6DA]">Excellence</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                {images.map((img, index) => (
                    <div key={index} className={`relative h-64 rounded-lg overflow-hidden shadow-lg group ${index === 0 ? 'md:col-span-2 md:h-96' : ''}`}>
                        <Image
                            src={img}
                            alt={`${service.title} ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-[#26C6DA] transition-colors">
                        <h4 className="font-bold text-[#0A192F] mb-2">{feature}</h4>
                        <div className="w-8 h-1 bg-[#26C6DA]" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const HighlightBox = ({ service }) => {
    return (
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <div>
                    <h2 className="text-3xl font-black text-[#0A192F] mb-6 uppercase tracking-tight">
                        Technical <span className="text-[#26C6DA]">Details</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {service.description}
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                    {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#0A192F] flex items-center justify-center text-[#26C6DA] font-bold shrink-0">
                                {index + 1}
                            </div>
                            <p className="text-[#0A192F] font-medium mt-2">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#0A192F] text-white p-8 rounded-lg shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#26C6DA] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-[#26C6DA]">
                    {service.highlight?.title || "Key Highlight"}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                    {service.highlight?.text || service.shortDescription}
                </p>
                <div className="w-full h-[1px] bg-white/10 mb-8" />
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-[#26C6DA]">
                        <Image src={service.image} alt="Service Icon" fill className="object-cover" />
                    </div>
                    <div>
                        <p className="text-xs text-[#26C6DA] uppercase tracking-widest font-bold">Azcon Certified</p>
                        <p className="text-sm font-bold">Quality Assurance</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const StepByStep = ({ service }) => {
    const steps = service.process || service.features.map((f, i) => ({ step: `0${i + 1}`, title: "Process Step", description: f }));

    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-black text-[#0A192F] mb-6 uppercase tracking-tight">
                    Our <span className="text-[#26C6DA]">Process</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                </p>
            </div>
            <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-100 z-10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-[#26C6DA] text-[#0A192F] font-black flex items-center justify-center text-xl rounded-sm mb-4 shadow-lg">
                                {step.step || index + 1}
                            </div>
                            <h4 className="font-black text-[#0A192F] text-lg mb-2 uppercase tracking-tight">{step.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const FeatureCards = ({ service }) => {
    return (
        <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-black text-[#0A192F] mb-6 uppercase tracking-tight">
                        Advanced <span className="text-[#26C6DA]">Solutions</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {service.description}
                    </p>
                </div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.map((feature, index) => (
                    <div key={index} className="bg-[#0A192F] p-8 rounded-sm group hover:bg-[#26C6DA] transition-colors duration-500">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#26C6DA] font-bold mb-6 group-hover:bg-white group-hover:text-[#0A192F] transition-colors">
                            {index + 1}
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#0A192F] transition-colors">{feature}</h4>
                        <div className="w-full h-[1px] bg-white/10 mt-4 group-hover:bg-[#0A192F]/20" />
                    </div>
                ))}
            </div>
        </div>
    );
};
