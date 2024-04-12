import { useForm } from "react-hook-form";
import axios from "axios";
// import { Resend } from 'resend';

// const resend = new Resend('re_daAuRZjZ_88riw8mnWw2siRm13tdtAJBW');

type FormValues = {
    name: string;
    email: string;
    companyName: string;
    feedback: string;
}


const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const submitHandler = async (data: FormValues) => {
        try {
            await axios.post("http://localhost:8001/send", {
                from: "onboarding@resend.dev",
                to: data.email,
                subject: data.companyName,
                html: data.feedback
            })
            alert("message is sent");
            reset();
        } catch (error) {
            alert("message not sent");

        }

    };

    return (
        <section>
            <div className="flex justify-around mt-16 py-5">
                <div>
                    <h3 className="text-xl font-semibold">Contact us</h3>
                    <h1 className="text-6xl font-bold mt-5">Let's Talk!</h1>
                    <h4 className="text-xl text-slate-600 mt-5">We will reach out to you within 24 hours</h4>
                    <h4 className="text-lg text-slate-700 font-semibold mt-7">Don't like filling up forms? Email us directly at-</h4>
                    <div> <p className="text-slate-600 mt-1">hi@truedax.io</p></div>
                </div>
                <div className="">
                    <form onSubmit={handleSubmit(submitHandler)} className="w-[400px] max-w-md space-y-8">
                        <div>
                            <input
                                {...register('name',{ required: true })}
                                type="text"
                                
                                className="w-full py-3 px-4 placeholder-gray-500 text-sm border-gray-300 rounded-md"
                                placeholder="Name"
                            />
                            {errors.name && <p className="text-red-600">Name is required</p>}
                        </div>
                        <div>
                            <input
                                {...register('email',{ required: true })}
                                type="email"

                                className="w-full py-3 px-4 placeholder-gray-500  text-sm border-gray-300 rounded-md"
                                placeholder="Email"
                            />
                            {errors.email && <p className="text-red-600">Please enter a valid email</p>}
                        </div>
                        <div>
                            <input
                                {...register('companyName',{ required: true })}
                                type="text"

                                className="w-full py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 text-sm border-gray-300 rounded-md"
                                placeholder="Company Name"
                            />
                            {errors.companyName && <p className="text-red-600">Company name is required</p>}
                        </div>
                        <div>
                            <input
                                {...register('feedback',{ required: true })}
                                type="text"

                                className="w-full py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 text-sm border-gray-300 rounded-md"
                                placeholder="How can we help you? Feel free to get in touch!"
                            />
                            {errors.feedback && <p className="text-red-600">Feedback is required</p>}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group w-1/2 flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-full text-white bg-green-600 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
