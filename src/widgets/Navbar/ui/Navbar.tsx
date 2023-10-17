import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    // видимость модального окна
    const [isAuthModal, setIsAuthModal] = useState(false);
    // переменная, которая показывает зареган ли пользоватлеь
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    // функция, которая менят состояник окна после его закратия.
    // Ссылка должная не менятся, поэтому используем useCallback
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    // функция, которая менят состояник окна после его закратия.
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    // для кнопки выйти
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    // navbar для зареганного пользователя
    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </header>
    );
});
