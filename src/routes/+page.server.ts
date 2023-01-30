import type { Actions } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
	//Example of email sending
	default: async ({ request }) => {
		// await setTimeout(() => { }, 700);
		// const data = await request.formData()
		// const msg = {
		// 	from: EMAIL_FROM,
		// 	to: EMAIL_TO,
		// 	templateId: SENDGRID_TEMPLATE_ID,
		// 	dynamicTemplateData: {
		// 		first: data.get("first"),
		// 		last: data.get('last'),
		// 		email: data.get('email'),
		// 		number: data.get('number'),
		// 		services: data.getAll('services[]'),
		// 		additional: data.get('additional')
		// 	}
		// }
		// sgMail.setApiKey(SENDGRID_KEY)
		// sgMail
		// 	.send(msg)
		// 	.then(() => {
		// 		console.log('Email sent');
		// 	})
		// 	.catch((error) => {
		// 		console.log("There was an error")
		// 		console.error(error);
		// 	});
	}
};