import { BuildOptions } from '../types/config';

export function buildBabelLoader({ isDev }: BuildOptions) {
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'], // языки
                            keyAsDefaultValue: true, // вытаскивает не только ключи, но и автоматически будет в качестве значения подставлять ключ
                        },
                    ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean), // запускем в Dev ржеиме смену измененных стилей без перезагрузки
            },
        },
    };
}
