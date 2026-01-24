const AuthPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            {/* Left section - Form */}
            <div className="w-1/2 flex items-center justify-center bg-gray-50 px-8">
                <div className="w-full max-w-md">{children}</div>
            </div>

            {/* Right section - Image */}
            <div className="w-1/2 relative">


                <img
                    src="/authBanner.jpg"
                    alt="Auth Visual"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default AuthPageLayout;