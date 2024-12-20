export interface Project {
    id: number;
    publicId: string;  // Public ID gambar di Cloudinary
    altText: string;  // Alt text untuk gambar
    title: string;  // Judul proyek
    description: string;  // Deskripsi proyek
  }
  
  export const projects1: Project[] = [
    
      {
        id: 1,
        publicId: 'https://res.cloudinary.com/doqmcufwf/image/upload//l_image:upload:logo_jlvtla/c_scale,fl_relative,w_0.08/o_50/fl_layer_apply,g_north_east,x_0.03,y_0.04/v1734070644/p2_jnkvcz.png',
        altText: 'Villa Modern',
        title: 'Villa Modern',
        description: 'Desain villa modern dengan sentuhan minimalis.',
      },
      {
        id: 2,
        publicId: 'https://res.cloudinary.com/doqmcufwf/image/upload//l_image:upload:logo_jlvtla/c_scale,fl_relative,w_0.08/o_50/fl_layer_apply,g_north_east,x_0.03,y_0.04/v1734070621/p1_lydaeh.png',
        altText: 'Kantor Minimalis',
        title: 'Kantor Minimalis',
        description: 'Desain kantor dengan konsep terbuka dan modern.',
      },
      {
        id: 3,
        publicId: 'https://res.cloudinary.com/doqmcufwf/image/upload//l_image:upload:logo_jlvtla/c_scale,fl_relative,w_0.08/o_50/fl_layer_apply,g_north_east,x_0.03,y_0.04/v1734070621/p3_pvbgrd.png',
        altText: 'Apartemen Mewah',
        title: 'Apartemen Mewah',
        description: 'Apartemen dengan desain elegan dan fungsional.',
      },
      {
        id: 4,
        publicId: 'https://res.cloudinary.com/doqmcufwf/image/upload//l_image:upload:logo_jlvtla/c_scale,fl_relative,w_0.08/o_50/fl_layer_apply,g_north_east,x_0.03,y_0.04/v1734070621/p3_pvbgrd.png',
        altText: 'Rumah Tinggal',
        title: 'Rumah Tinggal',
        description: 'Rumah tinggal dengan nuansa hangat dan nyaman.',
      },
      {
        id: 5,
        publicId: 'https://res.cloudinary.com/doqmcufwf/image/upload//l_image:upload:logo_jlvtla/c_scale,fl_relative,w_0.08/o_50/fl_layer_apply,g_north_east,x_0.03,y_0.04/v1734070621/p1_lydaeh.png',
        altText: 'Gedung Perkantoran',
        title: 'Gedung Perkantoran',
        description: 'Desain gedung perkantoran dengan struktur modern.',
      },
      {
        id: 6,
        publicId: 'https://res.cloudinary.com/doqmcufwf/image/upload//l_image:upload:logo_jlvtla/c_scale,fl_relative,w_0.08/o_50/fl_layer_apply,g_north_east,x_0.03,y_0.04/v1734070621/p1_lydaeh.png',
        altText: 'Kawasan Komersial',
        title: 'Kawasan Komersial',
        description: 'Desain kawasan komersial yang fungsional dan menarik.',
      },

  ];
  