import type { Translations } from './types';

export const ptBR: Translations = {
    common: {
        submit: 'Enviar',
        cancel: 'Cancelar',
        save: 'Salvar',
        delete: 'Excluir',
        edit: 'Editar',
        close: 'Fechar',
        loading: 'Carregando...',
        required: 'Obrigatório',
    },

    fields: {
        firstName: 'Nome',
        lastName: 'Sobrenome',
        fullName: 'Nome Completo',
        email: 'E-mail',
        password: 'Senha',
        confirmPassword: 'Confirmar Senha',
        birthDate: 'Data de Nascimento',
        age: 'Idade',
        phone: 'Telefone',
        mobile: 'Celular',
        address: 'Endereço',
        addressNumber: 'Número',
        complement: 'Complemento',
        neighborhood: 'Bairro',
        city: 'Cidade',
        state: 'Estado',
        country: 'País',
        zipCode: 'CEP',
        cpf: 'CPF',
        cnpj: 'CNPJ',
        rg: 'RG',
    },

    validation: {
        required: 'Este campo é obrigatório',
        email: 'E-mail inválido',
        minLength: (min) => `Deve ter pelo menos ${min} caracteres`,
        maxLength: (max) => `Deve ter no máximo ${max} caracteres`,
        min: (min) => `Deve ser pelo menos ${min}`,
        max: (max) => `Deve ser no máximo ${max}`,
        pattern: 'Formato inválido',
        passwordMismatch: 'As senhas não coincidem',
    },

    placeholders: {
        email: 'joao@exemplo.com',
        password: '••••••••',
        phone: '+55 11 98765-4321',
        zipCode: '01234-567',
        selectCountry: 'Selecione um país',
    },

    dataTable: {
        noData: 'Nenhum dado disponível',
        loading: 'Carregando...',
        rowsPerPage: 'Linhas por página:',
        page: 'Página',
        of: 'de',
        firstPage: 'Primeira',
        previous: 'Anterior',
        next: 'Próximo',
        lastPage: 'Última',
        selectAll: 'Selecionar todos',
        selected: (count: number) => `${count} selecionados`,
        showing: ({ start, end, total }: { start: number; end: number; total: number }) =>
            `Mostrando ${start} a ${end} de ${total} registros`,
    },
};
