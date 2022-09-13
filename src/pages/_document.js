import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
		};
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
					<meta name='keywords' content='React Nextjs Template Ravo Multi-Purpose themeforest' />
					<meta name='description' content='Ravo - Multi-Purpose React.js Next.js Template' />
					<meta name='author' content='' />
					<link rel='shortcut icon' href='/img/favicon.ico' />
					<link href='http://fonts.cdnfonts.com/css/gotham-rounded' rel='stylesheet' />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;