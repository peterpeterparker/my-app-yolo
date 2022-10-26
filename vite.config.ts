import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { splitVendorChunkPlugin } from 'vite'

const config: UserConfig = {
	plugins: [splitVendorChunkPlugin(), sveltekit()]
};

export default config;
