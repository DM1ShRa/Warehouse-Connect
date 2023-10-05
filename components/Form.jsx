import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='grey_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} it on WarehouseConnect and let surplus food find its purpose, bringing hope and sustenance to those who need it.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Owner Details
          </span>

          <input
            value={post.creator}
            onChange={(e) => setPost({ ...post, creator: e.target.value })}
            type='text'
            placeholder='Name'
            required
            className='form_input'
          />

        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Warehouse Name
          </span>

          <input
            value={post.warehouseName}
            onChange={(e) => setPost({ ...post, warehouseName: e.target.value })}
            type='text'
            placeholder='Warehouse Name'
            required
            className='form_input'
          />

        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Build Date
          </span>

          <input
            value={post.buildDate} // Assuming post.buildDate is a Date object or string
            onChange={(e) => setPost({ ...post, buildDate: e.target.value })}
            type='date' // Use type='date' to accept a date input
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Current Storage Status
          </span>
          <select
            value={post.currentStorageStatus}
            onChange={(e) => setPost({ ...post, currentStorageStatus: e.target.value })}
            required
            className='form_input'
          >
            <option value=''>Select Storage Status</option>
            <option value='Full'>Full</option>
            <option value='Empty'>Empty</option>
            <option value='Half-Occupied'>Half-Occupied</option>
          </select>
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Location
          </span>
          <input
            value={post.location}
            onChange={(e) => setPost({ ...post, location: e.target.value })}
            type='text'
            placeholder='Location'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Prompt'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='Tag'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Storage Capacity
          </span>
          <input
            value={post.storageCapacity}
            onChange={(e) => setPost({ ...post, storageCapacity: e.target.value })}
            type='number'
            placeholder='Storage Capacity'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Available Storage
          </span>
          <input
            value={post.availableStorage}
            onChange={(e) => setPost({ ...post, availableStorage: e.target.value })}
            type='number'
            placeholder='Available Storage'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Description
          </span>
          <textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder='Description'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Goods Type
          </span>
          <input
            value={post.goodsType}
            onChange={(e) => setPost({ ...post, goodsType: e.target.value })}
            type='text'
            placeholder='Goods Type'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Image URL
          </span>
          <input
            value={post.image}
            onChange={(e) => setPost({ ...post, image: e.target.value })}
            type='text'
            placeholder='Goods Type'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-black'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;