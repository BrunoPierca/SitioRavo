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
			<Html lang='es'>
				<Head>
					<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
					<meta name='keywords' content='3mpathy' />
					<meta name='description' content='3mpathy' />
					<meta name='author' content='CC' />
					<link rel='shortcut icon' href='/img/favicon.ico' />
					<link href='https://fonts.cdnfonts.com/css/gotham-rounded' rel='stylesheet' />
					<link href='https://fonts.cdnfonts.com/css/gotham' rel='stylesheet'></link>
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
