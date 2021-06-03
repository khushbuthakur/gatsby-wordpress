import React from 'react'

function Footer() {
    return (
        <footer className="py-10 bg-gray-800">
            <div className="px-4 text-white lg:px-16">
                <div className="-mx-2 flex flex-wrap justify-between space-y-8 lg:space-y-0">
                    <div className="w-full px-2 lg:w-auto">
                        <a className="inline-block hover:text-gray-300 focus:outline-none focus:ring focus:ring-blue-400" href="#">
                            <svg
                                ariaLabel="Northeastern University"
                                title="Northeastern University"
                                width="195"
                                height="18"
                                viewBox="0 0 195 18"
                                fill="none"
                            >
                                <path d="M189.958 15.114l3.166-7.2c.599-1.389.856-1.736 1.455-1.91v-.52h-3.337v.52c1.112.26 1.198.781.684 1.996l-1.283 3.123-1.54-3.557c-.343-.78-.257-1.301.855-1.388v-.52h-4.449v.52c.513.173.77.347 1.198 1.301l2.823 6.16-.513 1.041c-.257.608-.513 1.041-.77 1.302-.171-.694-.599-1.041-1.198-1.041s-1.112.433-1.112 1.214c0 .781.684 1.388 1.369 1.388 1.112 0 1.797-.52 2.652-2.429zm-4.535-2.169l-.257-.52c-.427.173-.855.347-1.197.347-.771 0-1.027-.434-1.027-.955V6.612h2.139v-.955h-2.139V4.096h-.343l-3.08 1.995v.52h1.198v5.64c0 1.128.599 1.735 1.882 1.735 1.027-.087 2.054-.347 2.824-1.04zm-6.417.26c-1.027-.173-1.198-.347-1.198-1.301V5.31h-.856l-2.481 1.649v.347h1.198v4.598c0 .954-.172 1.128-1.198 1.301v.52h4.535v-.52zm-2.482-9.196c.685 0 1.284-.607 1.284-1.301s-.514-1.215-1.198-1.215c-.77 0-1.284.607-1.284 1.301.086.694.514 1.215 1.198 1.215zm-2.909 7.288c0-1.562-1.284-2.082-2.567-2.516-1.198-.434-2.054-.608-2.054-1.562 0-.52.343-.954 1.027-.954.856 0 1.626.52 2.567 1.561l.428-.173-.599-2.082h-.257l-.342.26c-.513-.174-1.027-.347-1.626-.347-1.797 0-2.995 1.041-2.995 2.603 0 1.561 1.284 2.082 2.567 2.429 1.198.434 2.054.607 2.054 1.562 0 .607-.428 1.04-1.198 1.04-1.112 0-1.968-.78-3.08-2.082l-.428.174.684 2.69h.257l.514-.348c.598.26 1.197.434 1.882.434 1.711 0 3.166-1.04 3.166-2.69zm-8.813 1.995c-1.113-.173-1.284-.434-1.284-1.475V8.26a6.397 6.397 0 011.027-1.388c0 .694.428 1.128 1.027 1.128s1.112-.434 1.112-1.388c0-.781-.428-1.215-1.198-1.215-.856 0-1.455.694-2.053 1.735V5.397h-.771l-2.481 1.649v.347h1.198v4.598c0 .954-.171 1.214-1.112 1.301v.52h4.535v-.52zm-10.696-4.685c0-1.388.599-2.255 1.711-2.255.77 0 1.284.607 1.455 1.648l-3.166 1.128v-.52zm5.305 3.644l-.428-.347c-.428.52-1.112.868-1.968.868-1.54 0-2.481-1.215-2.738-2.777l5.048-1.735c-.085-1.822-1.454-2.776-3.08-2.776-2.396 0-4.107 1.909-4.107 4.338 0 2.342 1.54 4.164 4.107 4.164 1.626 0 2.652-.694 3.166-1.735zm-8.813-4.164c.598-1.388.855-1.736 1.454-1.909v-.52h-3.337v.52c1.112.26 1.198.78.685 1.995l-1.284 3.124-1.626-3.644c-.342-.781-.256-1.301.856-1.388v-.52h-4.449v.52c.513.173.77.347 1.197 1.301l2.91 6.333h.855l2.739-5.812zm-7.787 5.205c-1.027-.173-1.198-.347-1.198-1.301V5.397h-.856l-2.481 1.649v.347h1.198v4.598c0 .954-.171 1.128-1.198 1.301v.52h4.535v-.52zm-2.396-9.196c.685 0 1.284-.608 1.284-1.302 0-.694-.514-1.214-1.198-1.214-.77 0-1.284.607-1.284 1.301s.514 1.215 1.198 1.215zm-8.557 9.196c-.941-.173-1.112-.347-1.112-1.301V8c.856-.78 1.54-1.128 2.139-1.128.856 0 1.027.434 1.113 1.215v3.904c0 .954-.172 1.214-1.113 1.301v.52h4.364v-.52c-.941-.173-1.112-.347-1.112-1.301V7.913c0-1.388-.599-2.342-2.311-2.342-1.026 0-2.053.694-3.08 1.561V5.484h-.77l-2.481 1.648v.347h1.197v4.599c0 .954-.171 1.214-1.112 1.3v.521h4.364l-.086-.607zM113.29 3.228v5.119c0 3.297 1.712 5.64 6.076 5.64s6.075-2.343 5.989-5.64V4.183c0-1.996.514-2.516 1.541-2.777v-.52h-4.108v.52c.942.26 1.541.781 1.541 2.777v4.164c0 2.95-1.541 4.251-4.364 4.251-2.824 0-4.364-1.301-4.364-4.251V3.14c0-1.3.342-1.561 1.454-1.648V.886h-5.134v.607c1.027.26 1.369.434 1.369 1.735zM99.77 13.379c-.94-.174-1.112-.347-1.112-1.301V8.087c.856-.781 1.541-1.128 2.14-1.128.855 0 1.026.434 1.112 1.214v3.905c0 .954-.171 1.214-1.112 1.3v.521h4.363v-.52c-.941-.174-1.112-.347-1.112-1.301V8c0-1.388-.599-2.343-2.31-2.343-1.027 0-2.054.695-3.08 1.562V5.571h-.77l-2.482 1.648v.347h1.198v4.598c0 .955-.171 1.215-1.113 1.302v.52h4.364l-.085-.607zm-6.759 0c-1.112-.174-1.283-.434-1.283-1.475V8.347a6.393 6.393 0 011.026-1.388c0 .694.428 1.128 1.027 1.128s1.112-.434 1.112-1.388c0-.781-.427-1.215-1.198-1.215-.855 0-1.454.694-2.053 1.735V5.484h-.77L88.39 7.132v.347h1.198v4.599c0 .954-.17 1.214-1.112 1.3v.521h4.535v-.52zM82.401 8.78c0-1.388.599-2.256 1.711-2.256.77 0 1.284.607 1.455 1.648L82.4 9.301v-.52zm5.305 3.644l-.428-.347c-.428.52-1.112.867-1.968.867-1.54 0-2.481-1.215-2.738-2.776l5.048-1.735c-.085-1.822-1.454-2.777-3.08-2.777-2.396 0-4.107 1.91-4.107 4.252 0 2.342 1.54 4.164 4.107 4.164 1.626 0 2.567-.694 3.166-1.648zm-7.872.78l-.257-.607c-.428.174-.856.347-1.198.347-.77 0-1.027-.434-1.027-.954V6.785h2.14v-.954h-2.14V4.269h-.342l-3.08 1.996v.52h1.197v5.64c0 1.127.6 1.735 1.883 1.735 1.112 0 2.054-.347 2.824-.955zm-6.418-1.735c0-1.561-1.283-2.082-2.567-2.516-1.198-.434-2.053-.607-2.053-1.561 0-.52.342-.955 1.026-.955.856 0 1.626.52 2.567 1.562l.428-.174-.684-2.169h-.257l-.342.26c-.514-.173-1.027-.346-1.626-.346-1.797 0-2.995 1.04-2.995 2.602 0 1.562 1.284 2.083 2.567 2.43 1.198.434 2.054.607 2.054 1.561 0 .608-.428 1.041-1.198 1.041-1.113 0-1.968-.78-3.08-2.082l-.428.174.684 2.69h.257l.513-.348c.6.26 1.198.434 1.883.434 1.882.087 3.251-.954 3.251-2.603zm-13.006.347c0-.867.428-1.301 2.396-1.822v2.516c-.514.347-.856.52-1.284.52-.77 0-1.112-.433-1.112-1.214zm3.68 2.256c.77 0 1.54-.347 2.053-.694l-.171-.52c-.856.173-1.112 0-1.112-.521V7.74c0-1.388-.6-2.083-2.482-2.083-2.14 0-3.765 1.215-3.765 2.256 0 .52.342.955.941.955.685 0 1.027-.434 1.113-.955.085-.52-.086-.954-.343-1.128.428-.173.856-.347 1.284-.347.77 0 1.112.26 1.112.955v1.735c-2.995.78-4.45 1.475-4.45 3.036 0 1.215.771 1.909 2.054 1.909.77 0 1.712-.347 2.482-.954.171.607.599.954 1.283.954zM52.11 8.781c0-1.388.6-2.256 1.711-2.256.77 0 1.284.607 1.455 1.648L52.11 9.301v-.52zm5.305 3.644l-.428-.347c-.427.52-1.112.867-1.968.867-1.54 0-2.481-1.215-2.738-2.776l5.049-1.735c-.086-1.822-1.455-2.777-3.08-2.777-2.397 0-4.108 1.91-4.108 4.338 0 2.343 1.54 4.165 4.107 4.165 1.626 0 2.567-.694 3.166-1.735zm-13.52 1.04c-.94-.086-1.112-.346-1.112-1.3V8.172c.856-.78 1.455-1.127 2.14-1.127.855 0 1.026.433 1.112 1.214v3.904c0 .955-.171 1.215-1.112 1.302v.52h4.363v-.52c-.94-.174-1.112-.347-1.112-1.302V8.087c0-1.388-.599-2.343-2.31-2.343-1.027 0-2.054.608-3.08 1.475V.365h-.6l-2.823 1.822v.347h1.198v9.63c0 .955-.171 1.215-1.113 1.302v.52h4.364l.086-.52zm-4.877-.173l-.256-.52c-.428.173-.856.347-1.198.347-.77 0-1.027-.434-1.027-.955V6.96h2.14v-.954h-2.14V4.442h-.342l-3.08 1.995v.52h1.197v5.64c0 1.128.6 1.735 1.883 1.735a5.616 5.616 0 002.823-1.04zm-8.3.26c-1.112-.173-1.283-.433-1.283-1.474V8.52a6.4 6.4 0 011.027-1.388c0 .694.428 1.128 1.026 1.128.6 0 1.113-.434 1.113-1.388 0-.78-.428-1.215-1.198-1.215-.856 0-1.455.695-2.054 1.736V5.657h-.77l-2.481 1.649v.347h1.198v4.598c0 .954-.171 1.215-1.113 1.301v.521h4.535v-.52zM18.482 9.128c0-1.562.685-2.516 2.054-2.516 1.797 0 2.31 2.256 2.31 4.251 0 1.562-.684 2.516-2.053 2.516-1.797 0-2.31-2.256-2.31-4.251zm6.503.78c0-2.255-1.54-4.164-4.192-4.164-2.738 0-4.364 1.996-4.364 4.338 0 2.256 1.54 4.164 4.193 4.164 2.652 0 4.363-1.995 4.363-4.337zM13.862 4.53c0-1.996.513-2.516 1.54-2.777v-.52h-4.107v.52c.941.26 1.54.781 1.54 2.777v6.073l-8.642-8.85c-.514-.52-.685-.52-1.027-.52H0v.52c.685.087 1.112.347 1.882 1.128.257.174.514.52.514.955v6.853c0 1.996-.514 2.516-1.54 2.777v.52h4.107v-.52c-.941-.174-1.54-.694-1.54-2.69V4.27l9.754 9.89h.685V4.53z" fill="currentColor"/>
                            </svg>

                            <h2 className="mt-1 font-black">Information Technology Services</h2>
                        </a>

                        <address className="mt-4 text-sm not-italic">
                            360 Huntington Ave.<br/>
                            Boston, Massachusetts 02115
                        </address>

                        <div className="mt-8 -mx-1 flex items-center">
                            <a className="p-1 hover:text-gray-300 focus:outline-none focus:ring focus:ring-blue-400" href="#" aria-label="Facebook" title="Facebook">
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" fill="currentColor" />
                                </svg>
                            </a>
                            <a className="ml-2 p-1 hover:text-gray-300 focus:outline-none focus:ring focus:ring-blue-400" href="#" aria-label="Twitter" title="Twitter">
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" fill="currentColor" />
                                </svg>
                            </a>
                            <a className="ml-2 p-1 hover:text-gray-300 focus:outline-none focus:ring focus:ring-blue-400" href="#" aria-label="Youtube" title="Youtube">
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" fill="currentColor" />
                                </svg>
                            </a>
                            <a className="ml-2 p-1 hover:text-gray-300 focus:outline-none focus:ring focus:ring-blue-400" href="#" aria-label="Linkedin" title="Linkedin">
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" fill="currentColor" />
                                </svg>
                            </a>
                            <a className="ml-2 p-1 hover:text-gray-300 focus:outline-none focus:ring focus:ring-blue-400" href="#" aria-label="Instagram" title="Instagram">
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor" />
                                </svg>
                            </a>
                            <a className="ml-2 p-1 hover:text-gray-300 focus:outline-none focus:ring focus:ring-blue-400" href="#" aria-label="Snapchat" title="Snapchat">
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931a.498.498 0 00-.416.519c.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505a.498.498 0 00-.416-.519c-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438C17.036 1.986 14.511.7 11.987.7 9.479.7 6.973 1.968 5.829 4.533z" fill="currentColor"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-1/2 px-2 flex flex-col md:w-1/4 lg:w-auto">
                        <h3 className="font-bold">Purus Porta</h3>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Condimentum</a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Amet Ornare</a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Bibendum Mattis</a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Purus Nibh</a>
                    </div>
                    <div className="w-1/2 px-2 flex flex-col md:w-1/4 lg:w-auto">
                        <h3 className="font-bold">Consectetur</h3>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Euismod Quam</a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Cras Tristique </a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Etiam Tristique</a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Sollicitudin</a>
                    </div>
                    <div className="w-1/2 px-2 flex flex-col md:w-1/4 lg:w-auto">
                        <h3 className="font-bold">Fermentum</h3>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Bibendum</a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Tristique Cras</a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Sit Malesuada</a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Magna Inceptos</a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Cras Tristique </a>
                    </div>
                    <div className="w-1/2 px-2 flex flex-col md:w-1/4 lg:w-auto">
                        <h3 className="font-bold">Ullamcorper</h3>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Condimentum</a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Tellus</a>
                        <a className="mt-2 text-sm text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-blue-400" href="#">Quam Nibh</a>
                    </div>
                </div>
            </div>
    </footer>
    )
}

export default Footer
