import React from 'react';
import react from "../../assests/blogImg/react.png"
import javascript from "../../assests/blogImg/javascript.png"
import flex from "../../assests/blogImg/flex.png"

const BlogPost = () => {
    return (
        <div className="card bg-base-100 mx-auto">
            <div>
                <figure><img src={react} alt="Album" className='w-full h-[250px] object-contain' /></figure>
            </div>
            <div className="card-body">
            <h2 className="card-title justify-center text-2xl font-bold">React Js</h2>
            <p>বর্তমানে ওয়েব ডেভলপমেন্ট সেক্টরে ওয়েব এপ্লিকেশন তৈরিতে সবচেয়ে বেশি ব্যবহার করা ফ্রেমওয়ার্ক হলো রিয়েক্ট জেএস।
                মূলত ওয়েব এপ্লিকেশন এর ফ্রন্টএন্ডকে একটি ফ্লেস্কিবল, ইউজার ফ্রেন্ডলি লুক দিতেই এই ফ্রেম ওয়ার্ক দারুন ভাবে এগিয়ে। 
                ফেসবুকের একজন সফটওয়্যার ডেভেলপার  জডার্ন ওয়াকি ২০১৩ সালে এই ফ্রেমওয়ার্ক আবিষ্কার করেন যা এখন গুগোল সহ বড় বড় জায়ান্ট  কোম্পানি তাদের সিঙ্গেল পেইজ এপ্লিকেশন তৈরিতে ব্যবহার করছেন।
                রিয়েক্ট জেএস হলো ফ্রন্ট এন্ড বেস একটি ফ্রেমওয়ার্ক যা মূলত জাভাস্ক্রিপ্ট দিয়েই তৈরি করা এবং এটি দিয়ে খুব সহজেই কম্পোনেন্ট বেজড সিংগেল  পেইজ এপ্লিকেশন তৈরি করা যায়।  
                এছাড়া ও রিয়েক্ট এর সবচেয়ে বড় সুবিধা হলো এটি কম্পোনেন্ট বেজড হওয়ার একই কোড বারবার রিপিট করতে হয় না যার ফলে কোন একটি সেন্ট্রাল জায়গায় লিখা কোড চাইলে ডেভেলপাররা খুব সহজেই যখন যেখানে প্রয়োজন ব্যবহার করতে পারে এতে একদিকে যেমন ইউজার এক্সিপেরিয়েন্স ভালো হয় অন্যদিকে কোড রিলেডেবিলিটি ও সহজ হয়।
                এছাড়া ও অন্যান্য যে সুবিধার জন্য রিয়েক্ট জেএস এত জনপ্রিয় তা হলো-
                -এটি ভার্চুয়াল ডম ক্রিয়েশনের মাধ্যমে ওয়েবসাইট এর রেন্ডারিং ফাস্ট করে
                - এই ফ্রেম ওয়ার্ক এর স্ট্রং একটি কমিউনিটি রয়েছে যার ফলে যে কোন সমস্যার খুব দ্রুত সমাধান পাওয়া যায়
                - কাস্টমাইজড কম্পোনেন্ট তৈরি করা যায়
                এছাড়া ও এই ফ্রেম ওয়ার্ক এর অনেক অনেক সুবিধা রয়েছে যার দরুণ যতই সময় যাচ্ছে এর জনপ্রিয়তা ততটাই বাড়ছে।
                    ও হ্যা বলে রাখা ভালো আমি কিংবা আপনি এখন যে সোশ্যাল মিডিয়া সাইট ব্যবহার করছি এটি ও কিন্তু রিয়েক্ট জেএস দিয়েই তৈরি করা😀😀
            </p>
            
            </div>
            <div>
                <figure><img src={javascript} alt="Album" className='w-full h-[250px] object-contain' /></figure>
            </div>
            <div className="card-body">
            <h2 className="card-title justify-center text-2xl font-bold">JavaScript Array</h2>
            <p>Array এর যত মেথড !!

                মেথড মানে হলো পদ্ধতি। Array মেথড হলো Array এর এলিমেন্টগুলোকে এক্সেস করা কিংবা কোন একটি নিদিষ্ট এলিমেন্টকে বাইরে বের করে নিয়ে আসা। এই কাজ করার জন্য যে সকল পদ্ধতি ব্যবহার করা হয় তাই হলো Array মেথড। আজ আমরা বেশ কিছু Array মেথড নিয়ে জানব

                আমরা জানি Array এর এলিমেন্ট এর ইনডেক্স নাম্বার শুরু হয় 0 থেকে।

                যেমন- const arr= [1, 2, 3, 4, 5]

                এখানে 1 এই এলিমেন্ট এর ইনডেক্স নাম্বার হলো 0, এরপরের এলিমেন্ট এর ইনডেক্স নাম্বার হলো 1.

                এছাড়া ও আমরা খুব সহজেই .length ব্যবহার করে একটি অ্যারে তে কয়টি এলিমেন্ট আছে তা জানতে পারি। যেমন উপরের উদাহরণ এ যদি আমরা arr.length ব্যবহার করি তাহলে আমরা আউটপুট পাব ৫.

                আমরা যেহেতু উপরে জেনেছি যে অ্যারে এর ইনডেক্স নাম্বার এ্যারে লেন্থ থেকে ১ কম সেক্ষেত্রে আমরা যদি ডায়নামিক ভাবে অ্যারের ইনডেক্স নাম্বার পেতে চাই আমরা এভাবে লিখতে পারি

                যেমন -arr.length - 1.

                এর মানে হলো সিস্টেম কে বলে দেওয়া যে একটি অ্যারের যে লেন্থ তার থেকে ১ কম দিয়ে ইনডেক্স নাম্বার রির্টান করে দিতে এবং এই কাজ ডায়নামিক ভাবে করা যায়।

                এছাড়া ও Array তে রয়েছে slice, splice, subStr.

                চলুন দেখে নেয়া যাক এগুলো কিভাবে কাজ করে

                প্রথমে ধরে নিলাম একটি অ্যারে আছে const number= [3, 5, 7, 9, 12, 10]. যদি আমরা slice method ব্যবহার করি তাহলে কি দাঁড়ায়?

                const newNumber = number.slice(1, 4)
                output: [5, 7, 9]


                এখানে আসলে ঘটনা কি হলো?

                ঘটনা আর কিছুই না এখানে যখন আমরা slice মেথড ব্যবহার করি তখন দুটি প্যারামিটার নিতে হয়। প্রথম প্যারামিটার হলো Array এর কোন ইনডেক্স নাম্বার থেকে আমরা কাজ শুরু করতে চাই আর দ্বিতীয় প্যারামিটার হলো ঠিক কত নাম্বার ইনডেক্স এর আগ পর্যন্ত আমরা কাজ চালাতে চাই

                উপরে আমরা বলে দিয়েছি যে অ্যারে এর ১ নাম্বার ইনডেক্স থেকে কাজ শুরু হবে আর ৪ নাম্বার ইনডেক্স এর আগ পর্যন্ত কাজ চলবে।

                এছাড়া ও রয়েছে splice. এর গঠন টা হলো এরকম splice(2,0, 22,23)

                এর মানে হলো কোন একটা অ্যারে এলিমেন্ট এর মধ্যে ২ নাম্বার ইনডেক্স এ আমরা ২২, ২৩ এড করব কিন্তু অ্যারের কোন এলিমেন্ট আমরা রিমুভ করব না

                এছাড়াও রয়েছে pop, push, shift, unshift

                • pop ব্যবহার করা হয় কোন একটা এ্যারের লাস্ট এলিমেন্ট বের করে আনার জন্য. এটি লিখা হয় এভাবে arr.pop()

                • push ব্যবহার করা হয় কোন একটা এলিমেন্ট এ্যারের শেষে যোগ করার জন্য। যেমন- arr.push(2).

                shift এবং unshift এর কাজ হলো pop এবং push er ঠিক বিপরীত। মানে হলো shift Array এর প্রথম এলিমেন্ট বের করে আনে আর unshift এ্যারের শুরুতে নতুন এলিমেন্ট যোগ করে

                এর পাশাপাশি রয়েছে লুপ চালিয়ে এ্যারের এলিমেন্ট গুলো কিভাবে এক্সেস করা যায় যা আমরা জানব জাভাস্ক্রিপ্ট এর আরেক রত্ন লুপ ভ্যারিয়েবল নিয়ে কাজ করার সময়
            </p>
            
            </div>
            <div>
                <figure><img src={flex} alt="Album" className='w-full h-[250px] object-contain' /></figure>
            </div>
            <div className="card-body">
            <h2 className="card-title justify-center text-2xl font-bold">CSS FlexBox</h2>
            <p>আসুন আজকে CSS Flex নিয়ে একটু পড়াশুনা করে ফেলা যাক!

                Flex নামটি এসেছে মূলত Flexible থেকে। Flexible মানে কি?এর মানে হলো যেকোন পরিবেশের সাথে খাপ-খাওয়ানোর সক্ষমতা। একটি ওয়েবসাইটে বিভিন্ন ধরনের কনটেন্ট এর খাপ-খাওয়ানোকে বলা হয় সোজা বাংলায় Flex

                Flex সাধারণত একটি ওয়েবসাইট এর কন্টেনারকে Flexiblility প্রদান করে।
                কন্টেইনার কি?কন্টেইনার হলো যা ওয়েবসাইট এর কনটেন্ট ধারণ করে।

                একটি ওয়েবসাইটের display যখন আমরা flex ডিক্লেয়ার করে দেই তখনই container flexible behave শুরু করে
                display: flex;

                এখানে বলে রাখা হলো flex হলো one dimensional. এর মানে হলো At a time flex হয় row না হয় column বরাবর কাজ করবে। আর Flex by default row বরাবর কাজ করে

                (* row হলো Horizontal বরাবর যা থাকে আর column হলো Vertical বরাবর যা থাকে)

                সাধারনত Flex এর ডিরেকশন আমরা চেঞ্জ করে যদি কলাম বলে দেই তাহলে এটি কলাম বরাবর কাজ করবে

                যেমনঃ

                flex-direction: column;

                এছাড়া ও আমরা চাইলে Column কিংবা Row কে রিভার্স করতে পারি এর ডিরেকশন এর মাধ্যমে।
                flex-direction: column-reverse/ row-reverse;
                এছাড়া ও রয়েছে flex-start, flex-end, center, space-between, space-evenly, space-around

                যদি আপনি কোন ওয়েবসাইট কে mobile responsive করতে চান সেক্ষেত্রে flex ব্যবহার করা হয়.
                নিচের এই ছবিটি flex সম্পর্কে আরো ক্লিয়ায় ধারণা পেতে সাহায্য করবে

                এইতো ছোট্ট করে হয়ে গেলো flex এর সাথে পরিচয়
            </p>
            
            </div>
        </div>
    );
};

export default BlogPost;