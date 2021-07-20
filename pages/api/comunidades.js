import { SiteClient, siteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST') {
        const TOKEN = '07f3fdf86f33003489b5d3cdad5dfa';
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
        itemType: "968378", //id do model de communities criado pelo dato
        ...request.body,
        //title: "Comunidade de teste",
        //imageUrl: "https://github.com/matheuscroft.png",
        //creatorSlug: "matheuscroft"
    })

    response.json({
        dados: 'algum dado qqr',
        registroCriado: registroCriado,
    })
    return;

    }
    
    response.status(404).json({
        message: 'ainda n temos nada no get mas no post tem'
    })
}