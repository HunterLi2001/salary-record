import {
	defineConfig
} from "vite";
import uni from "@dcloudio/vite-plugin-uni";

export default defineConfig({
	plugins: [
		uni()
	],
	server: {
		port: 3000,
		proxy: {
			"/api": {
				
				target: "http://203.56.169.102:8084",
				changeOrigin: true,
				reWrite: (path) => {
					path.replace(/^\/api/, "");
				}
			}
		}
	}
})
