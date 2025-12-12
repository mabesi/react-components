import type { FormField } from './types';

/**
 * Field preset type - identifies which preset configuration to use
 */
export type FieldPresetType =
    // Personal Information
    | 'firstName'
    | 'lastName'
    | 'fullName'
    | 'email'
    | 'password'
    | 'confirmPassword'
    | 'birthDate'
    | 'age'
    // Contact Information
    | 'phone'
    | 'mobile'
    // Address Information
    | 'address'
    | 'addressNumber'
    | 'complement'
    | 'neighborhood'
    | 'city'
    | 'state'
    | 'country'
    | 'zipCode'
    // Brazilian Documents
    | 'cpf'
    | 'cnpj'
    | 'rg';

/**
 * Partial field configuration for presets
 * Excludes 'preset' to avoid circular reference
 */
export type FieldPresetConfig = Omit<Partial<FormField>, 'preset'>;

/**
 * Field presets configuration
 * Each preset provides default values for id, name, label, type, placeholder, and validation
 */
export const FIELD_PRESETS: Record<FieldPresetType, FieldPresetConfig> = {
    // ==================== Personal Information ====================
    firstName: {
        id: 'firstName',
        name: 'firstName',
        label: 'Nome',
        type: 'text',
        placeholder: 'João',
        validation: [
            { type: 'required', message: 'Nome é obrigatório' },
            { type: 'minLength', value: 2, message: 'Nome deve ter pelo menos 2 caracteres' },
            { type: 'maxLength', value: 50, message: 'Nome deve ter no máximo 50 caracteres' },
        ],
    },

    lastName: {
        id: 'lastName',
        name: 'lastName',
        label: 'Sobrenome',
        type: 'text',
        placeholder: 'Silva',
        validation: [
            { type: 'required', message: 'Sobrenome é obrigatório' },
            { type: 'minLength', value: 2, message: 'Sobrenome deve ter pelo menos 2 caracteres' },
            { type: 'maxLength', value: 50, message: 'Sobrenome deve ter no máximo 50 caracteres' },
        ],
    },

    fullName: {
        id: 'fullName',
        name: 'fullName',
        label: 'Nome Completo',
        type: 'text',
        placeholder: 'João Silva Santos',
        validation: [
            { type: 'required', message: 'Nome completo é obrigatório' },
            { type: 'minLength', value: 3, message: 'Nome completo deve ter pelo menos 3 caracteres' },
            { type: 'maxLength', value: 100, message: 'Nome completo deve ter no máximo 100 caracteres' },
        ],
    },

    email: {
        id: 'email',
        name: 'email',
        label: 'E-mail',
        type: 'email',
        placeholder: 'joao@exemplo.com',
        validation: [
            { type: 'required', message: 'E-mail é obrigatório' },
            { type: 'email', message: 'E-mail inválido' },
        ],
    },

    password: {
        id: 'password',
        name: 'password',
        label: 'Senha',
        type: 'password',
        placeholder: '••••••••',
        validation: [
            { type: 'required', message: 'Senha é obrigatória' },
            { type: 'minLength', value: 8, message: 'Senha deve ter pelo menos 8 caracteres' },
        ],
    },

    confirmPassword: {
        id: 'confirmPassword',
        name: 'confirmPassword',
        label: 'Confirmar Senha',
        type: 'password',
        placeholder: '••••••••',
        validation: [
            { type: 'required', message: 'Confirmação de senha é obrigatória' },
            {
                type: 'custom',
                message: 'As senhas não coincidem',
                validator: (value: any, formValues: any) => value === formValues.password,
            },
        ],
    },

    birthDate: {
        id: 'birthDate',
        name: 'birthDate',
        label: 'Data de Nascimento',
        type: 'date',
        validation: [
            { type: 'required', message: 'Data de nascimento é obrigatória' },
        ],
    },

    age: {
        id: 'age',
        name: 'age',
        label: 'Idade',
        type: 'number',
        placeholder: '25',
        validation: [
            { type: 'required', message: 'Idade é obrigatória' },
            { type: 'min', value: 0, message: 'Idade não pode ser negativa' },
            { type: 'max', value: 150, message: 'Idade inválida' },
        ],
    },

    // ==================== Contact Information ====================
    phone: {
        id: 'phone',
        name: 'phone',
        label: 'Telefone',
        type: 'text',
        placeholder: '+55 11 98765-4321',
        validation: [
            { type: 'required', message: 'Telefone é obrigatório' },
            {
                type: 'pattern',
                value: /^\+?[1-9]\d{1,14}$/,
                message: 'Telefone inválido (use formato internacional)',
            },
        ],
    },

    mobile: {
        id: 'mobile',
        name: 'mobile',
        label: 'Celular',
        type: 'text',
        placeholder: '+55 11 98765-4321',
        validation: [
            { type: 'required', message: 'Celular é obrigatório' },
            {
                type: 'pattern',
                value: /^\+?[1-9]\d{1,14}$/,
                message: 'Celular inválido (use formato internacional)',
            },
        ],
    },

    // ==================== Address Information ====================
    address: {
        id: 'address',
        name: 'address',
        label: 'Endereço',
        type: 'text',
        placeholder: 'Rua das Flores',
        validation: [
            { type: 'required', message: 'Endereço é obrigatório' },
            { type: 'minLength', value: 3, message: 'Endereço deve ter pelo menos 3 caracteres' },
        ],
    },

    addressNumber: {
        id: 'addressNumber',
        name: 'addressNumber',
        label: 'Número',
        type: 'text',
        placeholder: '123',
        validation: [
            { type: 'required', message: 'Número é obrigatório' },
        ],
    },

    complement: {
        id: 'complement',
        name: 'complement',
        label: 'Complemento',
        type: 'text',
        placeholder: 'Apto 45',
    },

    neighborhood: {
        id: 'neighborhood',
        name: 'neighborhood',
        label: 'Bairro',
        type: 'text',
        placeholder: 'Centro',
        validation: [
            { type: 'required', message: 'Bairro é obrigatório' },
        ],
    },

    city: {
        id: 'city',
        name: 'city',
        label: 'Cidade',
        type: 'text',
        placeholder: 'São Paulo',
        validation: [
            { type: 'required', message: 'Cidade é obrigatória' },
            { type: 'minLength', value: 2, message: 'Cidade deve ter pelo menos 2 caracteres' },
        ],
    },

    state: {
        id: 'state',
        name: 'state',
        label: 'Estado',
        type: 'text',
        placeholder: 'SP',
        validation: [
            { type: 'required', message: 'Estado é obrigatório' },
        ],
    },

    country: {
        id: 'country',
        name: 'country',
        label: 'País',
        type: 'text',
        placeholder: 'Brasil',
        defaultValue: 'Brasil',
        validation: [
            { type: 'required', message: 'País é obrigatório' },
        ],
    },

    zipCode: {
        id: 'zipCode',
        name: 'zipCode',
        label: 'CEP',
        type: 'text',
        placeholder: '01234-567',
        validation: [
            { type: 'required', message: 'CEP é obrigatório' },
            {
                type: 'pattern',
                value: /^\d{5}-?\d{3}$/,
                message: 'CEP inválido (formato: 12345-678)',
            },
        ],
    },

    // ==================== Brazilian Documents ====================
    cpf: {
        id: 'cpf',
        name: 'cpf',
        label: 'CPF',
        type: 'text',
        placeholder: '123.456.789-00',
        validation: [
            { type: 'required', message: 'CPF é obrigatório' },
            {
                type: 'pattern',
                value: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
                message: 'CPF inválido (formato: 123.456.789-00)',
            },
        ],
    },

    cnpj: {
        id: 'cnpj',
        name: 'cnpj',
        label: 'CNPJ',
        type: 'text',
        placeholder: '12.345.678/0001-00',
        validation: [
            { type: 'required', message: 'CNPJ é obrigatório' },
            {
                type: 'pattern',
                value: /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/,
                message: 'CNPJ inválido (formato: 12.345.678/0001-00)',
            },
        ],
    },

    rg: {
        id: 'rg',
        name: 'rg',
        label: 'RG',
        type: 'text',
        placeholder: '12.345.678-9',
        validation: [
            { type: 'required', message: 'RG é obrigatório' },
        ],
    },
};

/**
 * Apply a preset to a field configuration
 * Merges preset defaults with user-provided overrides
 */
export const applyFieldPreset = (
    preset: FieldPresetType,
    overrides: Partial<FormField> = {}
): FormField => {
    const presetConfig = FIELD_PRESETS[preset];

    if (!presetConfig) {
        throw new Error(`Unknown field preset: ${preset}`);
    }

    // Merge preset with overrides
    // User overrides take precedence over preset defaults
    const merged: FormField = {
        ...presetConfig,
        ...overrides,
        // Ensure required fields are present
        id: overrides.id || presetConfig.id || preset,
        name: overrides.name || presetConfig.name || preset,
        label: overrides.label || presetConfig.label || preset,
        type: overrides.type || presetConfig.type || 'text',
    } as FormField;

    // Merge validation rules if both preset and override have them
    if (presetConfig.validation && overrides.validation) {
        // User can completely override validation or extend it
        // By default, we use user's validation (they can include preset rules if needed)
        merged.validation = overrides.validation;
    }

    return merged;
};
