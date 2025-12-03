import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { DynamicForm, FormField } from '../src';

const App = () => {
  const fields: FormField[] = [
    {
      id: 'name',
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'John Doe',
      validation: [
        { type: 'required', message: 'Name is required' },
        { type: 'minLength', value: 3, message: 'Name must be at least 3 characters' }
      ]
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'john@example.com',
      validation: [
        { type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Invalid email address' }
      ]
    },
    {
      id: 'role',
      name: 'role',
      label: 'Role',
      type: 'select',
      options: [
        { label: 'Developer', value: 'dev' },
        { label: 'Designer', value: 'design' },
        { label: 'Manager', value: 'manager' }
      ],
      validation: [{ type: 'required', message: 'Role is required' }]
    },
    {
      id: 'experience',
      name: 'experience',
      label: 'Years of Experience',
      type: 'number',
      dependencies: [
        { field: 'role', value: 'dev' }
      ],
      validation: [
        { type: 'required', message: 'Experience is required' },
        { type: 'min', value: 0, message: 'Cannot be negative' }
      ]
    },
    {
      id: 'newsletter',
      name: 'newsletter',
      label: 'Subscribe to newsletter',
      type: 'checkbox'
    }
  ];

  const handleSubmit = async (values: any) => {
    console.log('Form submitted:', values);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Dynamic Form Example</h1>
      <DynamicForm
        fields={fields}
        onSubmit={handleSubmit}
        initialValues={{ newsletter: true }}
      />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
