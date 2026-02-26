import Electrobun, { Electroview } from 'electrobun/view';
export const ssr = false;

const rpc = Electroview.defineRPC({
	maxRequestTime: 5000,
	handlers: { requests: {}, messages: {} }
});

const electrobun = new Electrobun.Electroview({ rpc });

export async function load() {
	let _data = await electrobun.rpc.request.loadData({});
	return {
		title: `Main View ${Date.now()}`,
		data: _data
	};
}
