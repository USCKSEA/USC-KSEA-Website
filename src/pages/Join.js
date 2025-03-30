const Join = () => {
    return (
        <div className="flex flex-col gap-6 mx-auto w-[60vw] max-w-[1000px] sm:w-[60vw] md:w-[70vw] text-xl mb-5 text-gray-500">
            <div className="mx-auto">
                <h1 className="text-5xl font-bold m-[5vh] text-black">General Membership Details</h1>
            </div>
            
            <p className="text-[#9e2136] text-4xl">How to Become a General Member:</p>
            
            <div>
                <p>1. Register into the national KSEA organization​ (Chapter: Southern California)</p>
                <p><a href="https://www.ksea.org/join.aspx" target="_blank" rel="noreferrer" className="underline ml-5">https://www.ksea.org/join.aspx</a></p>
            </div>
            
            <p>2. Subscribe to our newsletter!</p>

            {/* form: https://docs.google.com/forms/d/1bfKIicnxjq9odVmz5jQ9fYQBlGC1t1G0JT80ImRR06E/edit#responses */}
            {/* response:  https://docs.google.com/spreadsheets/d/1J8EOYH2WqBK135hMzEcZrhZ6_69KUcJQ3_PjhOYWvM8/edit?resourcekey=&gid=54527199#gid=54527199*/}
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSemxxXHvfdB4gDO6W1EiUA1mR9M9sLxf9UyDfyuz93cKnqABw/viewform?embedded=true"
                title="Join KSEA Form"
                width="320"
                height="277"
                className="w-full max-w-3xl h-[600px]"
            >
                Loading…
            </iframe>

            <div>
                <p >3. Attend at least 2 events during the school year (Must be renewed every school year)</p>
                <p className="ml-5">Completing these requirements will make you an <span className="font-bold text-black">active member</span>!</p>
            </div>

            <p className="text-4xl text-black">Membership Privileges:</p>

            <p>Active members will receive early notification for events and priority for closed events and may qualify for the sponsorship for the Presidential Volunteers Service Award (PVSA) upon review.</p>

        </div>
    );
};

export default Join;
