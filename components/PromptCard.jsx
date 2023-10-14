import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 cursor-pointer' onClick={handleProfileClick}>
          <div className='flex items-center gap-3'>
            <Image
              src={post.creator.image}
              alt='user_image'
              width={40}
              height={40}
              className='rounded-full object-contain'
            />
            <div className='flex flex-col'>
              <h3 className='font-satoshi font-semibold text-gray-900'>
                {post.creator.username}
              </h3>
              <p className='font-inter text-sm text-gray-500'>
                {post.creator.email}
              </p>
            </div>
          </div>
          <div className='mt-3'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              Warehouse Name: {post.warehouseName}
            </h3>
            <p className='font-satoshi font-semibold text-gray-900'>
              Current Status: {post.currentStorageStatus}
            </p>
          </div>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={copied === post.prompt ? "./tick.svg" : "./copy.svg"}
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className='my-4 font-satoshi text-sm text-gray-700'>
        {post.prompt.split(' ').slice(0, 10).join(' ')}
        {post.prompt.split(' ').length > 10 ? '...' : ''}
      </p>


      {post.image && (
        <div className='post_image'>
          <Image
            src={post.image.startsWith('data:image') ? post.image : `data:image/jpeg;base64,${post.image}`}
            alt='post_image'
            width={200}
            height={200}
            objectFit='cover'
          />
        </div>
      )}
      

      <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.location)}
      >
        {post.location}
      </p>

      <div className='flex justify-between items-center'>
        <p
          className='font-inter text-sm grey_gradient cursor-pointer'
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          #{post.tag}
        </p>
        <Link href={`ReviewPage/${post._id}`}>
          <button className='font-inter text-sm bg-gray-500 text-white px-2 py-1 rounded'>
            Review
          </button>
        </Link>
      </div>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm grey_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm grey_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
