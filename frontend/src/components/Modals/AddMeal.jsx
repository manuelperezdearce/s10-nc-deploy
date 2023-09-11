import { IoCloseSharp } from 'react-icons/io5'
import { MdLocalDining } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'
import { useState } from 'react'

export const AddMeal = ({ closeModal }) => {
  const { categories, loading } = useSelector((state) => state.categories)
  const [file, setFile] = useState(null)

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const label = 'font-medium'
  const fieldStyle = 'flex flex-col gap-2'
  const checkboxFieldset = 'flex gap-2'
  const inputStyle = 'bg-white border rounded-md p-2 focus:outline-none focus:border-greenCustom focus:ring-1 focus:ring-greenCustom'
  const checkbox = 'appearance-none cursor-pointer w-6 h-6 border-2 border-greenCustom rounded-sm bg-white checked:bg-greenCustom checked:border-2'

  return (
    <div className='text-black bg-white md:p-10 flex flex-col gap-6'>
      <button onClick={closeModal} className='text-greenCustom text-5xl self-end'>
        <IoCloseSharp />
      </button>
      <h1 className='flex gap-4 font-bold text-2xl'><MdLocalDining className='text-greenCustom text-3xl' /> Añadir nuevo platillo</h1>
      <Formik
        initialValues={{
          name: '',
          is_vegan: false,
          is_glutenfree: false,
          is_proteinplus: false,
          price: 0,
          category_id: 1,
          description: ''

        }}
        onSubmit={(values) => {
          console.log(values)
          console.log(values.category_id)
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (

          <form className='flex flex-col gap-8 text-lg' onSubmit={handleSubmit}>

            <fieldset className={fieldStyle}>
              <label htmlFor='name' className={label}>Nombre</label>
              <input value={values.name} required placeholder='Nombre' name='name' className={inputStyle} onChange={handleChange} onBlur={handleBlur} />
            </fieldset>
            <div className='flex gap-4'>
              <fieldset className={checkboxFieldset}>
                <input value={values.is_vegan} type='checkbox' name='is_vegan' className={checkbox} onChange={handleChange} />
                <label htmlFor='is_vegan' className={label}>Vegano</label>
              </fieldset>
              <fieldset className={checkboxFieldset}>
                <input value={values.is_glutenfree} type='checkbox' name='is_glutenfree' className={checkbox} onChange={handleChange} />
                <label htmlFor='is_glutenfree' className={label}>Libre de Gluten</label>
              </fieldset>
              <fieldset className={checkboxFieldset}>
                <input value={values.is_proteinplus} type='checkbox' name='is_proteinplus' className={checkbox} onChange={handleChange} />
                <label htmlFor='is_proteinplus' className={label}>Protein+</label>
              </fieldset>
            </div>

            <div className='flex gap-8'>
              <fieldset className={fieldStyle}>
                <label htmlFor='price' className={label}>Precio</label>
                <input value={values.price} required placeholder='Precio' name='price' type='number' min={0} className={inputStyle} onChange={handleChange} onBlur={handleBlur} />
              </fieldset>
              <fieldset className={fieldStyle}>
                <label htmlFor='category_id' className={label}>Categoria</label>
                <select value={values.category_id} required placeholder='Categoria' name='category_id' className={inputStyle} onChange={handleChange} onBlur={handleBlur}>
                  {!loading &&
                    <>
                      {categories.map(item =>
                        <option key={item.id} value={item.id}>{item.name}</option>

                      )}
                    </>}
                </select>
              </fieldset>
            </div>
            <fieldset className={fieldStyle}>
              <label htmlFor='name' className={label}>Descripción</label>

              <textarea value={values.description} required placeholder='Descripcion' name='description' className={inputStyle} onChange={handleChange} onBlur={handleBlur} />
            </fieldset>

            <fieldset className={fieldStyle}>
              <label htmlFor='file' className={label}>Imagen del platillo</label>
              <input type='file' name='file' required onChange={handleFile} />
            </fieldset>

            <button type='submit' className='bg-greenCustom hover:bg-greenCustom2 duration-75 text-white font-medium px-6 py-2 text-base gap-x-1 rounded-md'>Añadir platillo</button>
          </form>
        )}

      </Formik>
    </div>
  )
}
