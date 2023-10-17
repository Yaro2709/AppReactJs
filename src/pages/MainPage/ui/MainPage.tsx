import React from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <HStack>
                <div>test</div>
                <ListBox
                    direction="bottom"
                    defaultValue="Выберите значение"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: 'test', disabled: true },
                        { value: '3', content: '567' },
                    ]}
                />
            </HStack>
            <div>test</div>
            <div>test</div>
        </Page>
    );
};

export default MainPage;
