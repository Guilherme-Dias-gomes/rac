const links = [
  { name: "Dedicação", href: "#" },
  { name: "Competencia", href: "#" },
  { name: "Qualidade", href: "#" },
  { name: "Resultado", href: "#" },
];
const stats = [
  { name: "Clientes Atendidos", value: "+1000" },
  { name: "Satisfação dos Clientes", value: "99%" },
  { name: "Suporte Técnico", value: "24 Horas" },
];

export default function InitialSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="flex flex-col mx-auto max-w-7xl px-6 lg:px-8 justify-center items-center text-center">
        <div className="mx-auto max-w-2xl lg:mx-0 mt-6">
          <h2 className="lg:text-5xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            A RAC Soluções está pronta para colaborar na definição do escopo da
            sua obra
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Nossa equipe dedicada está pronta para oferecer a solução ideal para
            suas necessidades energéticas. Com nossa experiência em projetos de
            grande porte, garantimos estar à altura de qualquer desafio que você
            apresente. Independentemente do projeto, nós temos a solução
            perfeita para você.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 items-center lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 font-semibold justify-center text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link, index) => (
              <a key={link.name} href={link.href}>
                {link.name}
                {index !== links.length - 1 && (
                  <span aria-hidden="true"> &rarr;</span>
                )}
              </a>
            ))}
          </div>
          <dl className="flex mt-16  gap-8 sm:mt-20 justify-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
